import { useEffect, useRef, useState } from 'react'

export const useGridTable = (resizable: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({})

  const updateContainerStyle = () => {
    if (!resizable) return
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const availableHeight = window.innerHeight - rect.top - 20

      setContainerStyle({
        height: `${availableHeight}px`,
        overflowY: 'auto',
      })
    }
  }

  useEffect(() => {
    if (resizable) {
      updateContainerStyle()
      window.addEventListener('grid-table-resize', updateContainerStyle)
    }
    return () => {
      window.removeEventListener('grid-table-resize', updateContainerStyle)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { containerStyle, containerRef }
}
