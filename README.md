# Performance Optimization

This example app suffers from most performance issues and anti-patterns an Angular app can have.

## Performance Problems

- Memory: leak or bloat
- Too many change-detection cycles and re-renderings
- Heavy computations
- Too many DOM nodes

## Memory Problems

### Signs

- Performance degrades over time
- App crashes after extended use
- Performance is consistently slow

### Reasons

- Detached DOM Trees
- Observables with longer lifespan
- console.logs
- Components that consistently increase in size (behaves like a leak - technically it is not a memory leak)

runtime performance in Angular is heavily tight with change detection
change detection triggered by:

- dom events: click, scroll, keydown, etc
- async processing (http, setTimeout, setInterval, Promise)
- call to specific methods (detectChanges)
