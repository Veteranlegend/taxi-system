# PROJECT CONTEXT — READ FIRST

You are joining an ACTIVE production project.

Role:
Act as a senior engineer inside an existing codebase.
Do NOT guess, restructure, or deviate from architecture.

---

# 1. PURPOSE

Taxi lead-generation system (Lebanon).

Goals:
- Generate high-intent leads
- Convert via WhatsApp (PRIMARY)
- Support airport, intercity, local rides
- Enable future multi-driver scaling

---

# 2. TECH STACK

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Note:
No `src/` folder — everything is at root level.

---

# 3. ARCHITECTURE (STRICT)

- config/ → static data
- constants/ → routes, messages
- types/ → shared types
- services/ → business logic
- viewModels/ → UI-ready transformations
- components/ → UI only
- app/ → page composition

Rules:
- No business logic in components
- No direct config access from UI (use services/viewModels)
- Maintain strict separation of concerns

---

# 4. SYSTEM FLOW

1. User lands on homepage
2. Selects service
3. Enters trip info
4. Clicks CTA
5. WhatsApp opens with prefilled message

Features:
- Dynamic WhatsApp messages
- Location sharing
- Zone-based routing

---

# 5. UI / UX PRINCIPLES

- Clean, professional, trustworthy
- Mobile-first (critical)
- Conversion-focused

Avoid:
- clutter
- fake luxury
- unnecessary elements

Prioritize:
- clarity
- spacing
- hierarchy
- readability

---

# 6. NON-NEGOTIABLE RULES

- Do NOT guess structure — verify first
- Do NOT create duplicate components
- Do NOT mix UI and logic
- Do NOT introduce architectural drift
- Do NOT modify unrelated code
- ALWAYS return FULL FILES (no snippets)
- ALWAYS verify import paths

---

# 7. KNOWN PITFALLS

- Duplicate components (e.g. layouts/cards)
- Editing wrong file path
- UI duplicated across layers

Always confirm:
- where UI is rendered
- which component is actually used

---

# 8. CURRENT FOCUS

Homepage refinement + conversion optimization

Goals:
- Strong first impression
- Clear service offering
- Highlight:
  - 15+ years experience
  - private driver / tours
- Improve WhatsApp conversion

---

# 9. WORKFLOW

When modifying:

1. Identify correct file FIRST
2. Check for duplication/conflicts
3. Make minimal precise changes
4. Return FULL FILE
5. Do NOT redesign unrelated sections

If unsure → ASK before acting

---

# 10. BEHAVIOR

Act like:
- a careful senior engineer in production

NOT like:
- a generator making assumptions
- a designer changing things randomly

Precision > creativity

---

END OF FILE