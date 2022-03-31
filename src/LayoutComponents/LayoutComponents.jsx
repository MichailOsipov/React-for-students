import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './LayoutComponents.css';

export const Section = ({ title, children }) => (
    <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string
};

export class LongDescription extends React.Component {
    state = { open: false };

    onToggleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const title = this.props.title;
        const description = this.props.description;

        return (
            <div className={styles.longDescription}>
                {title && <h3 className={styles.longDescriptionTitle}>{title}</h3>}
                {description && (
                    <div className={styles.longDescriptionDescription}>
                        {description}
                    </div>
                )}
                <button type="button" onClick={this.onToggleOpen}>
                    {this.state.open ? 'Скрыть' : 'Подробнее'}
                </button>
                {this.state.open && (
                    <div className={styles.longDescriptionContent}>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}

LongDescription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.element
};

export const BasicConcepts = ({ items }) => (
    <div className={styles.basicConcepts}>
        <h3 className={styles.basicConceptsTitle}>Основные понятия:</h3>
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

BasicConcepts.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

export const Links = ({ links }) => (
    <div>
        <h3 className={styles.linksTitle}>Полезные ссылки:</h3>
        <ul>
            {links.map(link => (
                <li key={link.url}>
                    <span className={styles.linkText}>{link.text}:</span>
                    <a
                        href={link.url}
                        key={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {link.url}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string
    }))
};

export const CodeExample = ({ title, description, children }) => (
    <div className={styles.codeExample}>
        {title && <h4 className={styles.codeExampleTitle}>{title}</h4>}
        {description && <p className={styles.codeExampleDescription}>{description}</p>}
        <pre className={styles.codeBox}>
            {children}
        </pre>
    </div>
);

CodeExample.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};
