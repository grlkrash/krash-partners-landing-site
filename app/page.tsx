import { SiteHeader } from '@/components/krash/site-header'
import { Hero } from '@/components/krash/hero'
import { WhatWeDo } from '@/components/krash/what-we-do'
import { TheEngine } from '@/components/krash/the-engine'
import { WhoItsFor } from '@/components/krash/who-its-for'
import { Proof } from '@/components/krash/proof'
import { CaseStudy } from '@/components/krash/case-study'
import { About } from '@/components/krash/about'
import { Contact } from '@/components/krash/contact'
import { SiteFooter } from '@/components/krash/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <TheEngine />
        <WhoItsFor />
        <Proof />
        <CaseStudy />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
