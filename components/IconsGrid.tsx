'use client'

import React, { useState, useEffect, useRef } from 'react'
import * as Icons from '@houstonicons/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FixedSizeList as List } from 'react-window'

interface IconProps {
  size: number
  fillType: 'stroke' | 'bulk' | 'solid' | 'twotone' | 'duotone'
  cornerStyle: 'sharp' | 'rounded' | 'standard'
}

const iconVariants = [
  { fillType: 'solid', cornerStyle: 'sharp' },
  { fillType: 'stroke', cornerStyle: 'sharp' },
  { fillType: 'bulk', cornerStyle: 'rounded' },
  { fillType: 'solid', cornerStyle: 'rounded' },
  { fillType: 'twotone', cornerStyle: 'rounded' },
  { fillType: 'duotone', cornerStyle: 'rounded' },
  { fillType: 'stroke', cornerStyle: 'rounded' },
  { fillType: 'solid', cornerStyle: 'standard' },
  { fillType: 'stroke', cornerStyle: 'standard' },
] as const

const iconNames = Object.keys(Icons).filter((name) => name.endsWith('Icon'))

const IconItem = ({
  iconName,
  style,
}: {
  iconName: string
  style: React.CSSProperties
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const checkSvgContent = () => {
      if (svgRef.current) {
        // Verifica se o conteúdo do SVG está vazio
        const svgContent = svgRef.current.innerHTML.trim()
        setIsVisible(svgContent.length > 0)
      }
    }

    // Verifica o conteúdo do SVG após a renderização
    checkSvgContent()
  }, [])

  return (
    <div style={style}>
      {isVisible &&
        iconVariants.map((variant, idx) => {
          const Icon = Icons[
            iconName as keyof typeof Icons
          ] as React.ComponentType<IconProps>
          return (
            <div
              key={`${iconName}-${idx}`}
              style={{ display: 'inline-flex', margin: '5px' }}
            >
              <Icon
                size={28}
                fillType={variant.fillType}
                cornerStyle={variant.cornerStyle}
              />
            </div>
          )
        })}
    </div>
  )
}

export function IconsGrid() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTermFromURL = searchParams.get('search') || ''

  const [searchTerm, setSearchTerm] = useState(searchTermFromURL)
  const [filteredIcons, setFilteredIcons] = useState<string[]>([])

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    else params.delete('search')

    router.replace(`/icons?${params.toString()}`)
  }, [searchTerm, router])

  useEffect(() => {
    const results = iconNames.filter((iconName) =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredIcons(results) // Exibir todos os ícones filtrados
  }, [searchTerm])

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite aqui"
      />
      <List
        height={600}
        itemCount={filteredIcons.length}
        itemSize={100}
        width={listWidth}
      >
        {({ index, style }) => (
          <IconItem iconName={filteredIcons[index]} style={style} />
        )}
      </List>
    </>
  )
}
