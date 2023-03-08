import { MainLayout } from '@/layouts/main'
import {
  Card,
  Container,
  Grid,
  Paper,
  Text
} from '@mantine/core'

// const inter = Inter({ subsets: [ 'latin' ] })

export default function Home() {
  return (
    <MainLayout>
      <Container size={'lg'}>
        <Grid>
          <Grid.Col xs={12} lg={4}>
            <Paper>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Text weight={500}>Lorem Ipsum</Text>
              </Card>
            </Paper>
          </Grid.Col>
          <Grid.Col xs={12} lg={4}>
            <Paper>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Text weight={500}>Lorem Ipsum</Text>
              </Card>
            </Paper>
          </Grid.Col>
          <Grid.Col xs={12} lg={4}>
            <Paper>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Text weight={500}>Lorem Ipsum</Text>
              </Card>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  )
}
