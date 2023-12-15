import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Tiltle</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control required as="textarea" rows={10} />
            </Form.Group>
          </Row>
        </Stack>
        <Stack
          direction="horizontal"
          gap={2}
          className="mt-3 justify-content-end"
        >
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export default NoteForm;
