// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SnippetsTwoToneSvg from 'icon-base/es/asn/SnippetsTwoTone';

export interface SnippetsTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSnippetsTwoTone: SnippetsTwoToneIconType = (props, context) => (
    <Icon name='SnippetsTwoTone' {...{ ...props, ...context.attrs }} icon={SnippetsTwoToneSvg} />
);

IconSnippetsTwoTone.displayName = 'IconSnippetsTwoTone';

export default IconSnippetsTwoTone;
