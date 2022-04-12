import { action } from "@storybook/addon-actions"
import React from "react"
import { States } from "storybook-states"
import styled from "styled-components"
import { Clickable } from "../Clickable"
import { CloseIcon } from "../../svgs/CloseIcon"
import { Flex } from "../Flex"
import { Spacer } from "../Spacer"
import { Pill, PillProps } from "./Pill"
import { Sup } from "../Sup"

export default {
  title: "Components/Pill",
}

export const _States = () => {
  return (
    <States<PillProps> states={[{}, { hover: true }, { focus: true }]}>
      <Pill>Pill</Pill>
    </States>
  )
}

_States.story = {
  name: "States",
}

const _Demo = styled(Flex)``
_Demo.displayName = "Pill"

export const Variants = () => {
  return (
    <States<PillProps>
      states={[
        {},
        { variant: "textRound", children: "Text Pill" },
        { variant: "textSquare", children: "Text Pill" },
        { variant: "filter", children: "Filter Pill" },
        {
          variant: "artist",
          children: "Artist Name Pill",
          src: [
            "https://picsum.photos/seed/user/30/30",
            "https://picsum.photos/seed/user/60/60",
          ],
        },
        {
          variant: "artist",
          children: "Artist Name Pill",
        },
        {
          variant: "artist",
          children: "Artist Name Pill",
          src: "https://picsum.photos/seed/user/30/30",
        },
      ]}
    >
      {(props) => {
        return (
          <_Demo>
            <Pill {...props}>Pill</Pill>

            <Spacer mx={0.5} />

            <Pill {...props} focus>
              Pill
            </Pill>

            <Spacer mx={0.5} />

            <Pill {...props} hover>
              Pill
            </Pill>

            {props.variant !== "artist" && (
              <>
                <Spacer mx={0.5} />

                <Pill {...(props as any)} active>
                  Pill
                </Pill>
              </>
            )}
          </_Demo>
        )
      }}
    </States>
  )
}

export const LinkExample = () => {
  return (
    <Pill
      variant="artist"
      as="a"
      // TODO: Need a decent way of typing the threaded polymorphic `as` prop
      // @ts-expect-error  MIGRATE_STRICT_MODE
      href="#example"
    >
      Artist Name
    </Pill>
  )
}

export const LongExample = () => {
  return (
    <Pill maxWidth={300}>
      Studio Museum in Harlem Artist-in-Residence (AIR) Program
    </Pill>
  )
}

export const LongExampleWithChildren = () => {
  return (
    <Pill maxWidth={200}>
      Artist Series <Sup pl={0.5}>130</Sup>
    </Pill>
  )
}

export const IconExample = () => {
  return (
    <Pill
      variant="textSquare"
      as={Clickable}
      onClick={action("onClick")}
      aria-label="Remove Painting"
    >
      Painting <CloseIcon fill="currentColor" ml={0.5} width={15} height={15} />
    </Pill>
  )
}
