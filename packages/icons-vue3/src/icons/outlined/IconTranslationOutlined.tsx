// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TranslationOutlinedSvg from 'gupo-icons-base/es/asn/TranslationOutlined';

export interface TranslationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTranslationOutlined: TranslationOutlinedIconType = (props, context) => (
    <Icon name='TranslationOutlined' {...{ ...props, ...context.attrs }} icon={TranslationOutlinedSvg} />
);

IconTranslationOutlined.displayName = 'IconTranslationOutlined';
IconTranslationOutlined.theme = 'outlined';
IconTranslationOutlined.originName = 'translation';

export default IconTranslationOutlined;
