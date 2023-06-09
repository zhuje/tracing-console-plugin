import * as React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import './example.css';

export default function TracingPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title data-test="distributed-tracing-page-title"> Tracing</title>
        </Helmet>
      </HelmetProvider>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1"> Hello, Tracing Plugin! </Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">
              <span className="console-plugin-template__nice">Nice!</span> Your
              plugin is working.
            </Text>
            <Text component="p">
              This is a custom page contributed by the console plugin template.
              The extension that adds the page is declared in
              console-extensions.json in the project root along with the
              corresponding nav item. Update console-extensions.json to change
              or add extensions. Code references in console-extensions.json must
              have a corresonding property <code>exposedModules</code> in
              package.json mapping the reference to the module.
            </Text>
            <Text component="p">
              After cloning this project, replace references to{' '}
              <code>console-template-plugin</code> and other plugin metadata in
              package.json with values for your plugin.
            </Text>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}
