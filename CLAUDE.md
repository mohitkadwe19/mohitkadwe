# Portfolio PROJECT RULES

## Approval

- Do not modify files, install/remove packages, refactor, change config, or perform other mutations without explicit approval.
- Read-only investigation does not require approval.
- Before changes: inspect → explain → propose exact changes → wait for approval.
- If the approved approach must materially change, stop and ask again.
- Implement only the approved scope — no unrequested additions.

## Git

- Do not run or suggest Git commands unless explicitly asked.
- User handles version control.

## Evidence

- Read relevant files before making claims about the codebase.
- Search existing code and patterns before creating something new.
- Identify the root cause, not just the reported symptom.
- Never present assumptions as facts.
- If something can be verified from the repo, inspect it first.
- If it still cannot be verified, say so clearly.

## Implementation

- Keep changes minimal and focused.
- Follow existing project conventions.
- Do not refactor or clean unrelated code.
- Do not introduce abstractions or dependencies without a demonstrated need.
- If unrelated problems are discovered, report them instead of silently fixing them.

## Verification

Never assume code works because it looks correct.

Run relevant checks: targeted/full tests, type checking, linting, build, i18n validation.

Never claim something passed or was verified unless the check was actually performed.

## Review

Before calling a meaningful change complete, check:

- correctness
- relevant edge cases
- regression risk
- security implications
- duplication
- unnecessary complexity
- consistency with existing architecture

Do not invent hypothetical issues without evidence.

## Principle

**Correctness > Safety > Simplicity > Maintainability > Speed**

Prefer the smallest correct solution that fits the existing system.