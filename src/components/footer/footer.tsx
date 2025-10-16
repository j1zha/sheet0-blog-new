import React from "react"

import styled from "styled-components"

const FooterNavigation: React.FC = () => {
  return (
    <Footer>
      <div className="footer-content">
        <section>{/* Company section - 目前被注释掉了 */}</section>

        <section>
          <h2 className="mb-2 font-semibold">Legal</h2>
          <ul className="text-foreground/60">
            <li>
              <a href="https://docs.sheet0.com/legal/privacy">Privacy policy</a>
            </li>
            <li>
              <a href="https://docs.sheet0.com/legal/terms">Terms</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-semibold">Social</h2>
          <ul className="text-foreground/60">
            <li>
              <a href="https://x.com/sheet0ai">X / Twitter</a>
            </li>
            <li>
              <a href="https://try.sheet0.com/discord">Discord</a>
            </li>
          </ul>
        </section>

        <section>{/* Product section - 目前被注释掉了 */}</section>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  width: 100%;
  background-color: var(--color-gray-1);

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    max-width: 720px;
    margin: 0 auto;
    padding: 96px 16px; /* py-38 = 96px, px-4 = 16px */
  }

  section {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 8px;
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-text);
    font-size: var(--text-base);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 4px;
  }

  a {
    color: var(--color-gray-6);
    text-decoration: none;
    font-size: var(--text-sm);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-blue);
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      padding: 48px 16px;
    }
  }

  @media (max-width: 480px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 32px 16px;
    }
  }
`

export default FooterNavigation
