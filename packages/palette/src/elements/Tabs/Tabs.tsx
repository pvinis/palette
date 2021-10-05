import { TextVariant } from "@artsy/palette-tokens/dist/typography/types"
import React, { createRef, useCallback, useState } from "react"
import { flattenChildren } from "../../helpers/flattenChildren"
import { useThemeConfig } from "../../Theme"
import { useUpdateEffect } from "../../utils/useUpdateEffect"
import { BaseTabs, BaseTabsProps } from "../BaseTabs"
import { BaseTab } from "../BaseTabs"
import { Clickable } from "../Clickable"

export interface TabLike extends JSX.Element {
  props: TabProps
}

export interface TabInfo extends TabProps {
  /** Index of the newly selected Tab */
  tabIndex: number
  /**
   * Arbitrary data that can be associated with a Tab.
   * Will be passed to the parent <Tabs>'s onChange handler.
   */
  data: any
}

export interface TabsProps extends BaseTabsProps {
  /** Space or visual divider between tabs */
  separator?: JSX.Element
  /** Index of the Tab that should be pre-selected */
  initialTabIndex?: number
  /** @deprecated */
  autoScroll?: boolean
  /** Function that will be called when a new Tab is selected */
  onChange?: (tabInfo?: TabInfo) => void
}

/** Tabs functionality */
export const useTabs = ({
  children,
  initialTabIndex = 0,
  onChange,
}: TabsProps) => {
  const tabs = flattenChildren<TabLike>(children).map((child) => ({
    child,
    ref: createRef<HTMLButtonElement | null>(),
  }))

  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialTabIndex)
  const activeTab = tabs[activeTabIndex]

  // If the `initialTabIndex` changes; update the active one
  useUpdateEffect(() => {
    setActiveTabIndex(initialTabIndex)
  }, [initialTabIndex])

  const handleClick = useCallback(
    (index: number) => {
      return () => {
        if (index === activeTabIndex) return

        setActiveTabIndex(index)

        tabs[index].ref.current?.scrollIntoView?.({
          inline: "center",
          block: "nearest",
          behavior: "smooth",
        })

        if (!onChange) return

        onChange({
          tabIndex: index,
          name: tabs[index].child.props.name,
          data: tabs[index].child.props.data ?? {},
        })
      }
    },
    [tabs, onChange, activeTabIndex]
  )

  return {
    tabs,
    activeTab,
    activeTabIndex,
    handleClick,
  }
}

/** A tab bar navigation component */
export const Tabs: React.FC<TabsProps> = ({
  children,
  initialTabIndex = 0,
  onChange,
  ...rest
}) => {
  const textVariant: TextVariant = useThemeConfig({
    v2: "mediumText",
    v3: "sm",
  })

  const { tabs, activeTab, activeTabIndex, handleClick } = useTabs({
    children,
    initialTabIndex,
    onChange,
  })

  return (
    <>
      <BaseTabs {...rest}>
        {tabs.map((tab, i) => {
          return (
            <Clickable
              key={i}
              ref={tab.ref as any}
              aria-selected={i === activeTabIndex}
              onClick={handleClick(i)}
              flex={1}
            >
              <BaseTab active={i === activeTabIndex} variant={textVariant}>
                <span>{tab.child.props.name}</span>
              </BaseTab>
            </Clickable>
          )
        })}
      </BaseTabs>

      {activeTab.child}
    </>
  )
}

Tabs.defaultProps = {
  mb: 2,
}

export interface TabProps {
  /** Display name of the Tab */
  name: string | JSX.Element
  /**
   * Arbitrary data that can be associated with a Tab.
   * Will be passed to the parent <Tabs>'s onChange handler.
   */
  data?: any
}

/**
 * An individual tab.
 * Does nothing on its own; props are dealt with inside of Tabs.
 */
export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>
