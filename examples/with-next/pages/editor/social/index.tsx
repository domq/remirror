import React, { FC } from 'react';

import { ExampleSocialEditor } from '@remirror/showcase/lib/social';

const SocialEditor: FC = () => <ExampleSocialEditor suppressHydrationWarning={true} />;
SocialEditor.displayName = 'SocialEditor';

export default SocialEditor;
