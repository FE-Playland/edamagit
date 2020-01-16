import { DocumentView } from './general/documentView';
import { Uri } from 'vscode';
import * as Constants from '../common/constants';
import { TextView } from './general/textView';
import { Stash } from '../common/gitApiExtensions';
import { MagitRepository } from '../models/magitRepository';

export class StashDetailView extends DocumentView {

  static UriPath: string = 'stash.magit';

  constructor(public uri: Uri, stash: Stash) {
    super(uri);

    this.addSubview(new TextView(stash.index + ''));
    this.addSubview(new TextView(stash.description));
  }

  static encodeLocation(repository: MagitRepository, stash: Stash): Uri {
    return Uri.parse(`${Constants.MagitUriScheme}:${StashDetailView.UriPath}?${repository.rootUri.path}#stash@{${stash.index}}`);
  }
}