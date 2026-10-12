import React, {useEffect, useState} from "react";
import type {GuestbookEntry} from "../types/GuestbookEntry.ts";
import './Guestbook.css'

export const Guestbook: React.FC = () => {
    const [entries, setEntries] = useState<GuestbookEntry[]> ([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/guestbook')
            .then(res => res.json())
            .then(data => setEntries(data))
            .catch(err => console.error("Error fetching guestbook:", err));
    }, []);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/guestbook', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, message})
            });

            if(!response.ok)
            {
                throw new Error('Failed to post message. Please insure inputs are valid.');
            }

            const newEntry = await response.json();

            setEntries([newEntry, ...entries]);
            setName('');
            setMessage('');
        } catch(err: unknown) {
            if(err instanceof Error)
            {
                setError(err.message);
            }
            else
            {
                setError('An unexpected error occured.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="guestbook-section">
            <h2>GuestBook & Endorsements</h2>

            <form onSubmit={handleSubmit} className="guestbook-form">
                {error && <div className="error-alert">{error}</div>}

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        minLength={2}
                        maxLength={50}
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        minLength={5}
                        maxLength={500}
                        rows={4}
                        disabled={isSubmitting}
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Posting' : 'Sign GuestBook'}
                </button>
            </form>

            <div className="guestbook-entries">
                {entries.map(entry => (
                    <div key = {entry.id} className = "guestbook-card">
                        <p className="guestbook-message">"{entry.message}"</p>
                        <div className="guestbook-meta">
                            <span className="guestbook-author">-{entry.name}</span>
                            {entry.createdAt && (
                                <span className="guestbook-date">
                                    {new Date(entry.createdAt).toLocaleDateString()}
                                </span>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};