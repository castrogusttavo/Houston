import { Article } from '@/components/docs/Article'
import { ListItem, UnorderedList } from '@/components/docs/article/List'
import {
  Breadcrumbs,
  Pagination,
  PaginationButton,
} from '@/components/docs/article/Location'
import {
  Anchor,
  DateBlock,
  H2,
  Paragraph,
} from '@/components/docs/article/Text'
import { Footer } from '@/components/docs/Footer'
import { Header } from '@/components/docs/Header'
import { Link, OnThisPage } from '@/components/docs/OnThisPage'
import { SideBar } from '@/components/docs/SideBar'

export default function DocsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-900 dark:text-zinc-50 antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <div className="mx-auto flex max-w-[90rem]">
        <SideBar />
        <Article>
          <Breadcrumbs crumbs={['Introduction']} />
          <H2 id="what-is-houston">
            What is Houston Icons? <Anchor href="#what-is-houston" />
          </H2>
          <Paragraph>
            Houston Icons, an expertly crafted top-notch icon library designed
            to make your applications look vibrant and dynamic.
          </Paragraph>
          <Paragraph>
            With more than 27,000 icons available in 7 different styles, our
            collection offers a wide range of easily customizable and scalable
            icons, perfect for enhancing user interfaces.
          </Paragraph>
          <Paragraph>
            Thousands of designers, developers, and content creators use Houston
            Pro for unlimited personal and commercial projects, making it one of
            the most versatile and user-friendly icon libraries available.
          </Paragraph>
          <H2 id="features">
            Features <Anchor href="#features" />
          </H2>
          <UnorderedList>
            <ListItem>36,000+ icons</ListItem>
            <ListItem>7 different styles</ListItem>
            <ListItem>Easily customizable</ListItem>
            <ListItem>Scalable</ListItem>
            <ListItem>Perfect for enhancing user interfaces</ListItem>
            <ListItem>Unlimited personal and commercial projects</ListItem>
          </UnorderedList>
          <H2 id="houston-icons-pro">
            Houston Pro <Anchor href="#houston-icons-pro" />
          </H2>
          <Paragraph>
            Houston Icons Pro is a premium icon library that offers unlimited
            access to our entire collection of icons, including all future
            updates and new releases. With Houston Icon Pro, you can use our
            icons in an unlimited number of personal and commercial projects,
            making it the perfect choice for designers, developers, and content
            creators.
          </Paragraph>
          <H2 id="how-to-use-houston-icons">
            How to use Houston Icons <Anchor href="#how-to-use-houston-icons" />
          </H2>
          <Paragraph>
            To use Houston Icons, simply install the icon library and import it
            into your project. You can then use the icons in your user interface
            by selecting the desired icon and customizing it to fit your needs.
          </Paragraph>
          <Paragraph>
            Also, you can access our web app to search and download icons
            directly from your browser.
          </Paragraph>
          <DateBlock dateTime="Oct, 05, 2024">Oct, 05, 2024</DateBlock>
          <Pagination>
            <PaginationButton href="/docs" orientation="right">
              React Page
            </PaginationButton>
          </Pagination>
        </Article>
        <OnThisPage title="On this page">
          <Link href="what-is-houston">What is Houston Icons Pro</Link>
          <Link href="features">Features</Link>
          <Link href="houston-icons-pro">Houston Icons Pro</Link>
          <Link href="how-to-use-houston-icons">How to use Houston Icons</Link>
        </OnThisPage>
      </div>
      <Footer />
    </div>
  )
}
