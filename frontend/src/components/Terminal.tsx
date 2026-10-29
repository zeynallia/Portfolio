import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

interface HistoryEntry {
    command: string;
    output: string;
}

export const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryEntry[]>([
        { command: '', output: 'Welcome to AmilOS v1.0.\nType "help" for a list of available commands.' }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom whenever history changes
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const currentCommand = input.trim();
            setInput(''); // Clear input immediately for better UX

            if (!currentCommand) return;

            // Handle local clear command without hitting the backend
            if (currentCommand.toLowerCase() === 'clear') {
                setHistory([]);
                return;
            }

            try {
                const response = await fetch('/api/terminal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ command: currentCommand })
                });

                if (!response.ok) throw new Error('Terminal offline');

                const data = await response.json();

                setHistory(prev => [...prev, {
                    command: currentCommand,
                    output: data.output
                }]);
            } catch (err) {
                setHistory(prev => [...prev, {
                    command: currentCommand,
                    output: 'Error: Could not connect to backend server.'
                }]);
            }
        }
    };

    return (
        <div className="terminal-container" onClick={() => document.getElementById('terminal-input')?.focus()}>
            <div className="terminal-history">
                {history.map((entry, index) => (
                    <div key={index} className="terminal-entry">
                        {entry.command && (
                            <div className="terminal-command">
                                <span className="terminal-prompt">guest@amil-portfolio:~$</span>
                                {entry.command}
                            </div>
                        )}
                        <div className="terminal-output">{entry.output}</div>
                    </div>
                ))}
            </div>
            <div className="terminal-input-row">
                <span className="terminal-prompt">guest@amil-portfolio:~$</span>
                <input
                    id="terminal-input"
                    className="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};