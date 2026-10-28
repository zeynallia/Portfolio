package com.portfolio.backend.service;

import com.portfolio.backend.dto.GuestbookRequest;
import com.portfolio.backend.model.GuestbookEntry;
import com.portfolio.backend.repository.GuestbookEntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuestbookService {
    private final GuestbookEntryRepository repository;

    @Transactional(readOnly = true)
    public List<GuestbookEntry> getAllEntries() {
        return repository.findAllByOrderByCreatedAtDesc();
    }

    @Transactional
    public GuestbookEntry createEntry(GuestbookRequest request) {
        GuestbookEntry entry = new GuestbookEntry();
        entry.setName(request.getName().trim());
        entry.setMessage(request.getMessage().trim());
        return repository.save(entry);
    }
}
