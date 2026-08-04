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
import { about, baseURL, hackathon, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: hackathon.title,
    description: hackathon.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(hackathon.title)}`,
    path: hackathon.path,
  });
}

export default function Hackathon() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="64">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={hackathon.path}
        title={hackathon.title}
        description={hackathon.description}
        image={`/api/og/generate?title=${encodeURIComponent(hackathon.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx translateY="8">
        <Column maxWidth="s" gap="m">
          <Row gap="8" vertical="center">
            <Icon name="rocket" onBackground="brand-weak" />
            <Text variant="label-strong-m" onBackground="brand-weak">
              HACKATHON
            </Text>
          </Row>
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            {hackathon.headline}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {hackathon.intro}
          </Text>
        </Column>
      </RevealFx>

      <Column gap="l">
        {hackathon.events.map((event, index) => (
          <RevealFx key={event.name} translateY="12" delay={index * 0.1}>
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
                    {event.name}
                  </Heading>
                  <Text variant="heading-default-s" onBackground="brand-weak">
                    {event.role}
                  </Text>
                </Column>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {event.timeframe}
                </Text>
              </Row>

              <Text variant="body-default-l" onBackground="neutral-weak">
                {event.description}
              </Text>

              <Row gap="8" wrap>
                {event.highlights.map((highlight) => (
                  <Tag key={highlight} size="l">
                    {highlight}
                  </Tag>
                ))}
              </Row>

              {"href" in event && event.href && (
                <Button
                  href={event.href}
                  label="查看项目"
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
