'use client';

import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';

import { BlogApi } from '@/api/blog-api';

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function uploadFile(file: any) {
  const files = await BlogApi.uploadFiles(file);

  return files.data.urls[0];
}

export default function Editor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'paragraph',
        content: 'Hãy bắt đầu bài viết của bạn.',
      },
    ],
    uploadFile,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
