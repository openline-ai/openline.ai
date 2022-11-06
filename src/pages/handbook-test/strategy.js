import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import { ThemeClassNames } from '@docusaurus/theme-common';
import MainStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css';
import DocPageStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import DocItemColStyles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';
import DocItemStyles from '@docusaurus/theme-classic/lib/theme/TOC/styles.module.css';
import DocBreadcrumbs from '@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css';

import MDXContent from '@theme/MDXContent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function MyCustomPage() {
const { siteConfig } = useDocusaurusContext();

const name = "Handbook"

return (
    <Layout
        title={`Openline Team Handbook | ${siteConfig.title}`}
    >
        <div className={DocPageStyles.docPage}>
            <aside className={clsx(
                ThemeClassNames.docs.docSidebarContainer,
                SidebarStyles.docSidebarContainer
            )}>
                <DocSidebar sidebar={[
                    { type: "link", href: "/handbook", label: "Welcome" },
                    { type: "link", href: "/handbook/strategy", label: "Openline strategy" }
                ]} path="/myCustomPage">
                </DocSidebar>
            </aside>
            <main className={clsx(MainStyles.docMainContainer)}>
                <div className={clsx('container', 'padding-top--md', 'padding-bottom--lg')}>
                    <div className="row">
                        <div className={clsx('col', DocItemColStyles.docItemCol)}>
                            <div className={DocItemStyles.docItemContainer}>
                                <article>
                                    <nav className={DocBreadcrumbs.breadcrumbsContainer}>
                                        <ul className="breadcrumbs">
                                            <li class="breadcrumbs__item"><a aria-label="Home page" class="breadcrumbs__link" href="/"><svg viewBox="0 0 24 24" className={DocBreadcrumbs.breadcrumbHomeIcon}><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" fill="currentColor"></path></svg></a></li>
                                            <li itemscope="" itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="breadcrumbs__item breadcrumbs__item--active"><span class="breadcrumbs__link" itemprop="name">{name}</span><meta itemprop="position" content="2" /></li>
                                        </ul>
                                    </nav>
                                    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
                                        <MDXContent>
                                            # Openline strategy

                                            god help us all
                                        </MDXContent>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </Layout>
);
}