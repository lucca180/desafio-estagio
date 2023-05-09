import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
  Box,
  Link,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Skeleton,
} from "@chakra-ui/react";
import { Endpoints } from "@octokit/types";
import { AiFillStar, AiOutlineFork, AiFillEye } from "react-icons/ai";

type Repo =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"][0];

type Props = {
  repo: Repo;
  isLoading?: boolean;
};

export const RepoCard = (props: Props) => {
  const { repo, isLoading } = props;

  if (isLoading)
    return (
      <Card maxW="550px" w="100%">
        <CardHeader pb={0}>
          <Skeleton>
            <Text fontSize="xs" color="blackAlpha.700">
              loren/ipsun
            </Text>
          </Skeleton>
          <Skeleton>
            <Heading size="md">Loren Ipsum</Heading>
          </Skeleton>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Box>
            <Box>
              <HStack>
                <Skeleton>
                  <Tag size="md" variant="subtle" colorScheme="cyan">
                    <TagLeftIcon boxSize="12px" as={AiFillStar} />
                    <TagLabel>1231231</TagLabel>
                  </Tag>
                </Skeleton>
                <Skeleton>
                  <Tag size="md" variant="subtle" colorScheme="cyan">
                    <TagLeftIcon boxSize="12px" as={AiOutlineFork} />
                    <TagLabel>123123</TagLabel>
                  </Tag>
                </Skeleton>
                <Skeleton>
                  <Tag size="md" variant="subtle" colorScheme="cyan">
                    <TagLeftIcon boxSize="12px" as={AiFillEye} />
                    <TagLabel>312313</TagLabel>
                  </Tag>
                </Skeleton>
              </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );

  if (!repo) return null;

  return (
    <Card maxW="550px" w="100%">
      <CardHeader pb={0}>
        <Text
          fontSize="xs"
          color="blackAlpha.700"
          as={Link}
          href={repo.html_url}
          isExternal
          display="block"
        >
          {repo.full_name}
        </Text>
        <Heading size="md" as={Link} href={repo.html_url} isExternal>
          {repo.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>{repo.description}</Box>
          <Box>
            <HStack>
              <Tag size="md" variant="subtle" colorScheme="cyan">
                <TagLeftIcon boxSize="12px" as={AiFillStar} />
                <TagLabel>{repo.stargazers_count}</TagLabel>
              </Tag>
              <Tag size="md" variant="subtle" colorScheme="cyan">
                <TagLeftIcon boxSize="12px" as={AiOutlineFork} />
                <TagLabel>{repo.forks_count}</TagLabel>
              </Tag>
              <Tag size="md" variant="subtle" colorScheme="cyan">
                <TagLeftIcon boxSize="12px" as={AiFillEye} />
                <TagLabel>{repo.watchers_count}</TagLabel>
              </Tag>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
