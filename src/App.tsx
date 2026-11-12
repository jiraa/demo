import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeatureGrid from './components/sections/FeatureGrid'
import Showcase from './components/sections/Showcase'
import ColorsSection from './components/sections/ColorsSection'
import Specs from './components/sections/Specs'
import CallToAction from './components/sections/CallToAction'
import {
  navigation,
  hero,
  featuresHeading,
  features,
  showcases,
  colorsHeading,
  colors,
  specsHeading,
  specGroups,
  specsFootnote,
  callToAction,
  footer,
} from './data/home'

/**
 * 页面装配层：只做「组合」，不包含任何写死的页面内容。
 * 内容来自 data/home.ts，视觉与交互来自各独立组件。
 */
export default function App() {
  return (
    <>
      <Navbar brand={navigation.brand} items={navigation.items} cta={navigation.cta} />

      <main>
        <Hero {...hero} />
        <FeatureGrid heading={featuresHeading} features={features} />
        {showcases.map((item) => (
          <Showcase key={item.id} {...item} />
        ))}
        <ColorsSection heading={colorsHeading} colors={colors} />
        <Specs heading={specsHeading} groups={specGroups} footnote={specsFootnote} />
        <CallToAction {...callToAction} />
      </main>

      <Footer brand={navigation.brand} {...footer} />
    </>
  )
}
