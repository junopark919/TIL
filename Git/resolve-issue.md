# Rejected Issue

```
! [rejected]        main -> main (fetch first)
! [rejected]        main -> main (non-fast-forward)
```

Probably somebody else has pushed to main already, and your commit is behind. Therefore you have to fetch, merge the changeset, and then you'll be able to push again.

```bash
git fetch origin main
git merge origin main
```
