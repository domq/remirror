import React, { FC } from 'react';

import { ExampleSocialEditor, SOCIAL_SHOWCASE_CONTENT } from '@remirror/showcase/lib/social';

const SocialEditorWithContent: FC = () => (
  <ExampleSocialEditor
    initialContent={SOCIAL_SHOWCASE_CONTENT}
    suppressHydrationWarning={true}
    characterLimit={280}
  />
);
SocialEditorWithContent.displayName = 'SocialEditorWithContent';

export default SocialEditorWithContent;
