// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SnippetsTwotoneSvg from 'icons-base/es/asn/SnippetsTwotone';

export interface SnippetsTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSnippetsTwotone: SnippetsTwotoneIconType = (props, context) => (
    <Icon name='SnippetsTwotone' {...{ ...props, ...context.attrs }} icon={SnippetsTwotoneSvg} />
);

IconSnippetsTwotone.displayName = 'IconSnippetsTwotone';
IconSnippetsTwotone.theme = 'twotone';
IconSnippetsTwotone.originName = 'snippets';

export default IconSnippetsTwotone;
