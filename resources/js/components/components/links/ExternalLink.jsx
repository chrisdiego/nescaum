const ExternalLink = ({ href, children, ...props }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "#003354" }}
            {...props}
        >
            {children}
        </a>
    );
};

export default ExternalLink;
