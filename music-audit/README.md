# PuzzlePilot music audit index — 24 November 2026

Snapshot of music questions from original packs 1–160 on master. **Audit only. Never merge this branch into master to deploy questions.**

- 14,100 distinct original IDs, music_0001–music_14100. All represented in the artist index.
- 3797 provisional artist/performer/credit lookup keys, 16054 artist-question links. A question may belong to multiple performers, so link counts are not question counts.
- 619 flagged composite credits/group names for manual review. Normalised name matching is provisional, not a completed alias or fact-level audit.
- 16 normalised identical question-and-answer groups (32 question records). These are flags, not automatic deletions. Different wording of the same fact needs individual audit.

## How to use
1. Look up the artist in artist-directory.csv by artist name or normalised key. Directory count is distinct question IDs per key. The original packs column identifies source packs; Index file may list more than one CSV.
2. Read the matching artist records from the listed alphabetical CSV(s), including artist-additional.csv when listed. Use the original source link and ID when auditing or correcting. The ten source-*.json files preserve the exact question, answer, original tags, topic and pack number for every music question.
3. Check related aliases, band members, collaborators and review.csv before declaring complete coverage. Search the original extracts for known alternate names and incidental mentions; automated associations can miss alternate spellings or over-associate references.
4. Check exact-duplicate-flags.csv plus fact-level duplicates (including the previously flagged Chasing Cars / Snow Patrol across packs 15 and 21). No original questions were edited, moved or retired by this indexing operation.
5. Compare artist keys against the master music spreadsheet as each artist is audited; the index is not yet reconciled against that workbook. Keys include individual members, groups, composite credits and spelling variants, not necessarily distinct artists.

## Validation
Read-back verification across all seven artist CSV files confirmed exactly 14,100 distinct IDs, no missing original IDs, no duplicate artist/ID links, consistent original question and answer for multi-artist links, and matching directory counts. The source extraction was generated from each pack's exported question array. Original master branch and quiz bank are unchanged.
