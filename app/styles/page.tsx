import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StyleIconCard } from '@/components/StyleIconCard'
import { DialogPromotion } from '@/components/DialogPromotion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Icon Styles',
}

export default function StylesPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main className="overflow-x-hidden">
        <div className="relative px-6 lg:px-0 flex flex-col mx-auto max-w-[80rem] mt-16 lg:mt-28 pb-20">
          <div
            className="absolute -top-[11rem] -left-[5rem] w-[275px] h-[275px] shrink-0 blur-[45px] rounded-full"
            style={{
              background:
                'linear-gradient(184deg, #FEFFFE 23.18%, #99FF89 62.74%, #FFd600 92%)',
            }}
          />
          <div className="mb-12 z-10">
            <h1 className="text-3xl font-bold text-black sm:text-[3.375rem] break-words">
              57 Popular icon categories
            </h1>
            <p className="mx-auto mt-2 sm:mt-7 text-lg leading-8 text-grey-500">
              Houston Provides 7 popular styles to fulfill your creative needs.
              Explore stroke, twotone, duotone, solid, bulk icon styles.
            </p>
          </div>
        </div>
        <div className="py-[55px] bg-[#F8F8F8]">
          <StyleIconCard
            styleName="Stroke"
            description="HoustonIcons'; stroke icons showcase a sleek and modern aesthetic with a single, consistent outlined path. Their minimalist design is adaptable to various backgrounds and scalable dimensions. Ideal for digital interfaces, these vector-based icons allow customization where any color applied affects only the stroke, preserving a clean and personalized visual appeal."
            image1="/styles/stroke-1.svg"
            image2="/styles/stroke-2.svg"
          />
        </div>
        <div className="py-[55px]">
          <StyleIconCard
            styleName="Solid"
            description="HoustonIcons' solid icons are characterized by bold, filled shapes that create a strong and impactful visual presence. Versatile for various applications, they are commonly used in digital interfaces. Customization is straightforward, with any chosen color filling the entire shape ensuring a cohesive and striking appearance."
            image1="/styles/solid-1.svg"
            image2="/styles/solid-2.svg"
          />
        </div>
        <div className="py-[55px] bg-[#F8F8F8]">
          <StyleIconCard
            styleName="Twotone"
            description="HoustonIcons' twotone icons blend two distinct colors, allowing for independent customization of the primary and secondary colors. The default setup assigns specific sections for each color, with the secondary set at 40% opacity. This design enables multicolored effect on the outlines of the icons."
            image1="/styles/twotone-1.svg"
            image2="/styles/twotone-2.svg"
          />
        </div>
        <div className="py-[55px]">
          <StyleIconCard
            styleName="Duotone"
            description="HoustonIcons'  duotone icons feature a sophisticated dual-color design with two layers-primary and secondary colors, where the secondary color defaults to 40% opacity. This design uniquely affects both the stroke and fill of the icons, allowing users to apply colors to both layers for a customizable and dynamic appearance."
            image1="/styles/duotone-1.svg"
            image2="/styles/duotone-2.svg"
          />
        </div>
        <div className="py-[55px] bg-[#F8F8F8]">
          <StyleIconCard
            styleName="Bulk"
            description="HoustonIcons' dual-color icons employ a scheme that affects only the fill, providing versatile design options. Users can apply colors directly to both layers, creating multicolored icons with ease, suitable for various modern design projects."
            image1="/styles/bulk-1.svg"
            image2="/styles/bulk-2.svg"
          />
        </div>
        <div className="py-[55px]">
          <StyleIconCard
            styleName="Rounded"
            description="HoustonIcons' rounded icons are defined by equally rounded corners and smooth curves, offering a visually appealing and approachable design. This consistent, friendly appearance make them ideal for projects aiming for a modern and user-friendly aesthetic, adding a touch of warmth to digital interfaces."
            image1="/styles/rounded-1.svg"
            image2="/styles/rounded-2.svg"
          />
        </div>
        <div className="py-[55px] bg-[#F8F8F8]">
          <StyleIconCard
            styleName="Sharp"
            description="HoustonIcons' sharp icons feature crisp, non-rounded edges, delivering a bold and refined visual language. Crafted for projects that require distinct outlines, they offer a modern and professional look. The precise detailing enhances the sophistication of any design, making them a compelling choice for refined visual communication."
            image1="/styles/sharp-1.svg"
            image2="/styles/sharp-2.svg"
          />
        </div>
      </main>
      <Footer />

      <DialogPromotion />
    </div>
  )
}
