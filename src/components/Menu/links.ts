import { StaticTrlKey } from 'lang/trls';
interface Link {
    href: string;
    title: StaticTrlKey;
}
const links: Link[] = [
    {
        href: 'reviews/',
        title: 'reviews',
    },
    {
        href: 'walkthrough/',
        title: 'guides',
    },
    {
        href: 'categories/history/',
        title: 'history',
    },
];
export default links;
