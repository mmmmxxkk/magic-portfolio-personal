import {
  Button,
  Column,
  Heading,
  Icon,
  Meta,
  RevealFx,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { about, baseURL, community, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: community.title,
    description: community.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(community.title)}`,
    path: community.path,
  });
}

export default function Community() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="64">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={community.path}
        title={community.title}
        description={community.description}
        image={`/api/og/generate?title=${encodeURIComponent(community.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx translateY="8">
        <Column maxWidth="s" gap="m">
          <Row gap="8" vertical="center">
            <Icon name="community" onBackground="brand-weak" />
            <Text variant="label-strong-m" onBackground="brand-weak">
              COMMUNITY
            </Text>
          </Row>
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            {community.headline}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {community.intro}
          </Text>
        </Column>
      </RevealFx>

      <Column gap="l">
        {community.initiatives.map((initiative, index) => (
          <RevealFx key={initiative.name} translateY="12" delay={index * 0.1}>
            <Column
              fillWidth
              gap="m"
              padding="l"
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
            >
              <Row fillWidth horizontal="between" vertical="start" s={{ direction: "column" }}>
                <Column gap="4">
                  <Heading as="h2" variant="heading-strong-xl">
                    {initiative.name}
                  </Heading>
                  <Text variant="heading-default-s" onBackground="brand-weak">
                    {initiative.role}
                  </Text>
                </Column>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {initiative.timeframe}
                </Text>
              </Row>

              <Text variant="body-default-l" onBackground="neutral-weak">
                {initiative.description}
              </Text>

              <Row gap="8" wrap>
                {initiative.tags.map((tag) => (
                  <Tag key={tag} size="l">
                    {tag}
                  </Tag>
                ))}
              </Row>

              {"href" in initiative && initiative.href && (
                <Button
                  href={initiative.href}
                  label="查看黑客松记录"
                  variant="secondary"
                  size="s"
                  arrowIcon
                />
              )}
            </Column>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
