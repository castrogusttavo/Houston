import * as Icon from '@houstonicons/react'
import * as Tooltip from '@radix-ui/react-tooltip'

const iconsNames = Object.keys(Icon).slice(-6)

interface IconItem {
  key: string
}

export function IconItem() {
  const IconComponent = Icon[
    iconName as keyof typeof Icon
  ] as React.ComponentType<IconProps>

  const filteredVariants = iconVariants.filter((variant) => {
    const matchesFillType =
      selectedSearchTab.tabTitle === 'All' ||
      variant.fillType === selectedSearchTab.tabTitle.toLowerCase()
    const matchesCornerStyle =
      !selectedSearchTab.tabSubtitle ||
      variant.cornerStyle ===
        selectedSearchTab.tabSubtitle
          .replace(/[()]/g, '')
          .toLowerCase()

    return matchesFillType && matchesCornerStyle
  })

  return filteredVariants.map((variant, variantIndex) => {
    const totalIndex =
      iconIndex * filteredVariants.length + variantIndex
    const iconLeftPosition = 15 + (totalIndex % columns) * iconWidth
    const iconTopPosition =
      18 + Math.floor(totalIndex / columns) * 100

    const adjustedLeftPosition = Math.min(
      iconLeftPosition,
      containerWidth - iconWidth,
    )

  return (
    <Tooltip.Provider
      key={`${iconName}-${variant.fillType}-${variant.cornerStyle}-${variantIndex}`}
      delayDuration={700}
    >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            className="absolute h-[82px] w-[100px] pr-[18px] flex flex-col"
            style={{
              left: `${adjustedLeftPosition}px`,
              top: `${iconTopPosition}px`,
            }}
          >
            <div className="p-4 flex gap-1 items-center justify-center py-7 group hover:bg-gray-50 cursor-grab mb-2 relative aspect-square shrink-0 rounded-lg border-[0.5px] border-solid border-[#ECEEF2]">
              <div className="w-7 h-7">
                <IconComponent
                  iconSize={28}
                  fillType={variant.fillType}
                  cornerStyle={variant.cornerStyle}
                />
              </div>
            </div>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-softis-mid select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50 mr-[20px]"
            side="bottom"
            align="center"
            sideOffset={5}
          >
            {formateIconName(iconName)}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
