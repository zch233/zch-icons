// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TranslationOutlinedSvg from 'icon-base/es/asn/TranslationOutlined';

export interface TranslationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTranslationOutlined: TranslationOutlinedIconType = (props, context) => (
    <Icon name='TranslationOutlined' {...{ ...props, ...context.attrs }} icon={TranslationOutlinedSvg} />
);

IconTranslationOutlined.displayName = 'IconTranslationOutlined';

export default IconTranslationOutlined;
