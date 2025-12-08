# Website Update Plan: Advantis Care Business Model Alignment

## Executive Summary

The website needs to be restructured to reflect Advantis Care's new B2B business model, which positions the company as a **high-touch clinical and administrative extension-of-care platform** serving three distinct partner types:
1. **FQHCs and CHCs** (revenue share model)
2. **Health Plans** (PMPM model)
3. **Health Systems and IPAs** (PMPM or episodic bundled arrangements)

## Current State Analysis

### What's Working
- ✅ Clean, professional design
- ✅ Good component structure (Hero, ServiceCard, etc.)
- ✅ Responsive layout
- ✅ Mission statement aligns with "extension of care" concept

### What Needs to Change

#### 1. **Target Audience Shift**
- **Current**: Generic healthcare messaging, some B2C elements (private-services page)
- **New**: Pure B2B focus on three partner types
- **Action**: Remove or de-emphasize B2C content, create partner-specific sections

#### 2. **Value Proposition**
- **Current**: "Technology-enabled care for patients at home"
- **New**: "Extension-of-care platform that supports FQHCs, health systems, IPAs, and health plans"
- **Action**: Update Hero, Mission, and all key messaging

#### 3. **Service Offerings**
- **Current**: Generic RPM, CCM, Preventative Care
- **New**: Integrated platform including:
  - RPM + CCM (full-service operation)
  - SDOH navigation (PRAPARE screening, resource mobilization)
  - Care coordination
  - Preventive-care support
  - Annual Wellness Visit support
  - Medication reconciliation
  - Appointment scheduling
  - Care-gap closure
- **Action**: Restructure services page to show integrated platform

#### 4. **Partner-Specific Messaging**
Need distinct sections/pages for:
- **FQHCs/CHCs**: Revenue share model (20% retention), full-service operation, billing under FQHC umbrella
- **Health Plans**: PMPM model, HEDIS/STAR ratings focus, risk adjustment, AWV support
- **Health Systems/IPAs**: PMPM or episodic bundles, post-discharge stabilization, readmission reduction

#### 5. **Key Differentiators to Highlight**
- Single, vertically-integrated engagement engine (replaces multiple vendors)
- Proprietary patient-engagement infrastructure
- High-frequency, high-intensity engagement for high-risk populations
- Structured, multi-dimensional data accumulation (clinical, behavioral, SDOH)
- Predictive modeling and early-intervention capabilities
- Population-risk stratification

## Recommended Changes by Page

### Homepage (`src/app/page.tsx`)

#### Hero Section
- **Current**: "Care that moves with you" / "Technology-enabled care for patients at home"
- **New**: Focus on B2B value proposition
  - Headline: "Extend Your Care Capacity Without Increasing Staff"
  - Subheadline: "A high-touch clinical and administrative extension-of-care platform for FQHCs, health systems, IPAs, and health plans"

#### Mission Section
- **Current**: Generic mission about extending care
- **New**: Emphasize platform approach and partner types
  - "Advantis Care is a vertically-integrated extension-of-care platform..."
  - Highlight three partner types with brief value props

#### Services Section
- **Current**: Three generic service cards
- **New**: Show integrated platform components:
  1. **Remote Patient Monitoring + Chronic Care Management** (full-service operation)
  2. **SDOH Navigation & Care Coordination** (PRAPARE screening, resource mobilization)
  3. **Preventive Care & Care-Gap Closure** (AWV support, medication reconciliation, appointment scheduling)
  4. **Data & Analytics** (predictive modeling, risk stratification)

#### New Section: "Who We Serve"
Add a section with three columns for:
- FQHCs/CHCs
- Health Plans
- Health Systems/IPAs
Each with brief value proposition and link to detailed page

#### "How It Works" Section
- Update steps to reflect B2B partnership model:
  1. Partnership Setup & Integration
  2. Patient Identification & Onboarding
  3. Clinical Monitoring & Engagement
  4. Outcomes & Revenue Generation

#### FAQ Section
- Update FAQs to address B2B concerns:
  - Pricing models (revenue share vs PMPM)
  - Integration with EHRs
  - Billing and compliance
  - Staffing requirements
  - SDOH navigation capabilities
  - Data and reporting

### About Page (`src/app/about/page.tsx`)

#### "Our Why" Section
- Update to reflect B2B focus and platform approach
- Emphasize solving the "burden on providers" problem
- Highlight the unified infrastructure advantage

#### New Section: "Our Platform"
- Explain the vertically-integrated approach
- Show how it replaces multiple fragmented vendors
- Highlight proprietary infrastructure

#### New Section: "Our Data Advantage"
- Explain multi-dimensional data accumulation
- Predictive modeling capabilities
- Early-intervention triggers
- Population-risk stratification

### Services Page (`src/app/services/page.tsx`)

#### Restructure to Show Platform Components
1. **Remote Patient Monitoring & Chronic Care Management**
   - Full-service operation (device provisioning, onboarding, monitoring, review, nurse-led interactions, documentation)
   - Daily monitoring and intervention
   - Clinical supervision

2. **SDOH Navigation & Care Coordination**
   - PRAPARE screening
   - Resource mobilization (transportation, food, utilities, housing)
   - Barrier reduction
   - Community resource connections

3. **Preventive Care & Administrative Support**
   - Annual Wellness Visit support
   - Chronic condition reviews
   - Medication reconciliation
   - Appointment scheduling
   - Care-gap closure

4. **Data & Analytics**
   - Structured data collection
   - Predictive modeling
   - Early-intervention triggers
   - Risk stratification
   - Value-based contract support

### New Pages Needed

#### 1. `/partners/fqhcs` or `/solutions/fqhcs`
- Revenue share model explanation
- Full-service operation details
- Billing under FQHC umbrella
- 20% revenue retention
- UDS/HEDIS improvement
- SDOH integration
- Case studies/testimonials

#### 2. `/partners/health-plans` or `/solutions/health-plans`
- PMPM model explanation
- HEDIS/STAR ratings focus
- Risk adjustment accuracy
- AWV support (flat fees)
- Preventive-care coordination
- Performance bonuses
- Case studies/testimonials

#### 3. `/partners/health-systems` or `/solutions/health-systems`
- PMPM or episodic bundled arrangements
- Post-discharge stabilization
- Readmission reduction
- Population health extension
- Care management augmentation
- Value-based contract support
- Case studies/testimonials

### Navigation Updates

#### Main Navigation
- Add "Solutions" or "Partners" dropdown with:
  - For FQHCs
  - For Health Plans
  - For Health Systems
- Or create separate top-level items

#### Footer
- Update links to reflect new structure
- Add partner-specific resources

## Content Updates Needed

### Key Messaging Changes

1. **From**: "Technology-enabled care for patients"
   **To**: "Extension-of-care platform for healthcare organizations"

2. **From**: Generic service descriptions
   **To**: Integrated platform components with specific capabilities

3. **From**: Patient-focused benefits
   **To**: Organizational benefits (revenue, capacity, outcomes, quality metrics)

4. **From**: Individual service offerings
   **To**: Unified infrastructure replacing multiple vendors

### Terminology Updates
- Emphasize "extension-of-care platform"
- Use "vertically-integrated engagement engine"
- Highlight "proprietary patient-engagement infrastructure"
- Mention "high-frequency, high-intensity engagement"
- Reference "multi-dimensional data" and "predictive modeling"

## Implementation Priority

### Phase 1: Core Messaging (High Priority)
1. Update Hero section messaging
2. Update Mission section
3. Restructure Services section
4. Add "Who We Serve" section
5. Update FAQ section

### Phase 2: New Content (Medium Priority)
1. Create partner-specific pages (FQHCs, Health Plans, Health Systems)
2. Add "Our Platform" section to About page
3. Add "Data Advantage" section
4. Update "How It Works" section

### Phase 3: Refinement (Lower Priority)
1. Add case studies/testimonials
2. Create partner-specific resources
3. Add ROI calculators or tools
4. Enhanced data visualization

## Questions to Consider

1. **Navigation Structure**: Dropdown menu or separate top-level pages for partner types?
2. **Pricing Transparency**: How much detail to show about revenue share percentages and PMPM rates?
3. **Case Studies**: Do we have specific examples for each partner type?
4. **Competitive Positioning**: Should we explicitly mention "replaces multiple vendors"?
5. **Data Visualization**: Should we show examples of the data/analytics capabilities?

## Next Steps

1. Review and approve this plan
2. Prioritize which changes to implement first
3. Gather any missing content (case studies, specific metrics, etc.)
4. Begin implementing Phase 1 changes
5. Test and iterate based on feedback

