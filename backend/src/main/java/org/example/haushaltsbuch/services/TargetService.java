package org.example.haushaltsbuch.services;

import lombok.AllArgsConstructor;
import org.example.haushaltsbuch.models.Target;
import org.example.haushaltsbuch.repositories.TargetRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TargetService {

  private final TargetRepository targetRepository;

  public List<Target> findAll(){
    return targetRepository.findAll();
  }
  public Optional<Target> findByID(Long id){
    return targetRepository.findById(id);
  }
  public Target create(Target category){
    return targetRepository.save(category);
  }
  public Target update(Target category){return targetRepository.save(category);
  }
  public void delete(Long id){
    targetRepository.deleteById(id);
  }
}
