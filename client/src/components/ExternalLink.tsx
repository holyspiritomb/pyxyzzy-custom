const ExternalLink = ({ href, children }: { href: string, children?: any }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

export default ExternalLink
/* vim: set ft=typescriptreact : */
