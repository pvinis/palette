import React, { useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { variant } from "styled-system"
import { boxMixin } from "../../Box"
import { Spinner } from "../../Spinner"
import { Sans } from "../../Typography"
import { ButtonProps } from "../Button"
import { BUTTON_SIZES, BUTTON_TEXT_SIZES, BUTTON_VARIANTS } from "./tokens"

export const ButtonV2: React.FC<ButtonProps> = ({
  children,
  loading,
  color,
  size,
  onClick,
  ...rest
}) => {
  const ref = useRef<HTMLButtonElement | null>(null)

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!loading && onClick) {
      onClick(event)
    }
  }

  useEffect(() => {
    if (loading && ref.current !== null) {
      ref.current.blur()
    }
  }, [loading])

  return (
    <Container
      ref={ref as any}
      onClick={handleClick}
      size={size}
      loading={loading}
      tabIndex={loading ? -1 : 0}
      {...rest}
    >
      {loading && <Spinner size={size} color="currentColor" />}

      <Sans
        pt="1px"
        weight="medium"
        size={BUTTON_TEXT_SIZES[size]}
        opacity={loading ? 0 : 1}
      >
        {children}
      </Sans>
    </Container>
  )
}

ButtonV2.defaultProps = {
  size: "medium",
  variant: "primaryBlack",
}

type ContainerProps = Pick<
  ButtonProps,
  "size" | "inline" | "loading" | "hover" | "focus" | "disabled"
>

const Container = styled.button<ContainerProps>`
  display: inline-block;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  align-items: center;
  border: 2px solid;
  border-radius: 3px;
  transition: color 0.25s ease, border-color 0.25s ease,
    background-color 0.25s ease;

  ${boxMixin};

  ${(props) => {
    // Handle sizing
    return variant({
      prop: "size",
      variants: BUTTON_SIZES[props.inline ? "inline" : "block"],
    })(props)
  }};

  ${(props) => {
    // Handle props driven states
    if (props.hover) {
      return variant({ variants: BUTTON_VARIANTS.hover })(props)
    }

    if (props.focus) {
      return css`
        outline: 0;
        ${variant({ variants: BUTTON_VARIANTS.focus })(props)}
      `
    }

    if (props.loading) {
      return css`
        cursor: auto;
        transition: none;
        pointer-events: none;
        ${variant({ variants: BUTTON_VARIANTS.loading })(props)}
      `
    }

    if (props.disabled) {
      return css`
        pointer-events: none;
        ${variant({ variants: BUTTON_VARIANTS.disabled })(props)}
      `
    }

    return variant({ variants: BUTTON_VARIANTS.default })(props)
  }}

  ${(props) => {
    // Handle pseudo classes
    return css`
      @media ${props.theme.mediaQueries.hover} {
        &:hover {
          ${variant({ variants: BUTTON_VARIANTS.hover })(props)}
        }
      }

      &:focus {
        outline: 0;
        ${variant({ variants: BUTTON_VARIANTS.focus })(props)}
      }

      &:disabled {
        pointer-events: none;
        ${variant({ variants: BUTTON_VARIANTS.disabled })(props)}
      }
    `
  }};
`
