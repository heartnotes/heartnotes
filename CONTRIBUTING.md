# Contribute to Heartnotes

This guide guidelines for those wishing to contribute.

## Contributor license agreement

By submitting code as an individual or as an entity you agree that your code is licensed the same as the project (Affero GPLv3).

## Issues and pull requests

Issues and merge requests should be in English and contain appropriate language for audiences of all ages.

We will only accept a merge requests which meets the following criteria:

* Can be merged without problems (if not please use: `git rebase master`)
* Does not break any existing functionality
* Fixes one specific issue or implements one specific feature (do not combine things, send separate merge requests if needed)
* Keeps the code base clean and well structured
* Contains functionality we think other users will benefit from too
* Doesn't add unnessecary configuration options since they complicate future changes

## Testing

Please ensure your changes work in both development and production mode:

* Development mode (with livereload): `gulp --debug`
* Production mode: `gulp release`, then run the `Heartnotes.app` OS X app in the release folder.
