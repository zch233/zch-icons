// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SnippetsFilledSvg from 'icon-base/es/asn/SnippetsFilled';

export interface SnippetsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSnippetsFilled: SnippetsFilledIconType = (props, context) => (
    <Icon name='SnippetsFilled' {...{ ...props, ...context.attrs }} icon={SnippetsFilledSvg} />
);

IconSnippetsFilled.displayName = 'IconSnippetsFilled';

export default IconSnippetsFilled;
