import Hero from '@/components/landing/Hero'
import Story from '@/components/landing/Story'
import Pillars from '@/components/landing/Pillars'
import Featured from '@/components/landing/Featured'
import ShopTeaser from '@/components/landing/ShopTeaser'
import FinalStatement from '@/components/landing/FinalStatement'

interface LandingPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { locale } = await params
  return (
    <div className="space-y-0">
      <Hero locale={locale} />
      <Story locale={locale} />
      <Pillars locale={locale} />
      <Featured locale={locale} />
      <ShopTeaser locale={locale} />
      <FinalStatement locale={locale} />
    </div>
  )
}
