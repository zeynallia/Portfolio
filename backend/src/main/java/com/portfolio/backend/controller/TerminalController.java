package com.portfolio.backend.controller;

import com.portfolio.backend.dto.TerminalRequest;
import com.portfolio.backend.dto.TerminalResponse;
import com.portfolio.backend.service.TerminalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/terminal")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TerminalController {
    private final TerminalService terminalService;

    @PostMapping
    public TerminalResponse execute(@RequestBody TerminalRequest request) {
        String result = terminalService.executeCommand(request.getCommand());
        return new TerminalResponse(result);
    }
}
