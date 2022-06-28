// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SnippetsFilledSvg from 'gupo-icons-base/es/asn/SnippetsFilled';

export interface SnippetsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSnippetsFilled: SnippetsFilledIconType = (props, context) => (
    <Icon name='SnippetsFilled' {...{ ...props, ...context.attrs }} icon={SnippetsFilledSvg} />
);

IconSnippetsFilled.displayName = 'IconSnippetsFilled';
IconSnippetsFilled.theme = 'filled';
IconSnippetsFilled.originName = 'snippets';

export default IconSnippetsFilled;
