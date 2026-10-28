package com.portfolio.backend.controller;

import com.portfolio.backend.dto.GuestbookRequest;
import com.portfolio.backend.model.GuestbookEntry;
import com.portfolio.backend.service.GuestbookService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guestbook")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GuestBookController {
    private final GuestbookService guestbookService;

    @GetMapping
    public List<GuestbookEntry> getEntries()
    {
        return guestbookService.getAllEntries();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GuestbookEntry addEntry(@Valid @RequestBody GuestbookRequest request)
    {
        return guestbookService.createEntry(request);
    }
}
