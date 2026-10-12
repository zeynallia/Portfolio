package com.portfolio.backend.controller;

import com.portfolio.backend.model.GuestbookEntry;
import com.portfolio.backend.repository.GuestbookEntryRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/guestbook")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GuestBookController {
    private final GuestbookEntryRepository repository;

    @GetMapping
    public Iterable<GuestbookEntry> getEntries() {
        return repository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GuestbookEntry addEntry(@Valid @RequestBody GuestbookEntry entry) {
        return repository.save(entry);
    }
}
