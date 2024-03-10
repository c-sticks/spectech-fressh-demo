```mermaid
gitGraph TB:
   commit id: "Alpha"
   commit id: "KFJUO"
   branch login
   checkout login
   commit id: "wip"
   commit id: "wip 2"
   commit id: "login done"
   checkout main
   merge login
    commit id: "Beta"

   branch feature-a
   checkout feature-a
   commit
   commit
   checkout main
   merge feature-a
```

CDCI: Continuous Deployment Continuous Integration
