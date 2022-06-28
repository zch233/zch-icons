// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ImportOutlinedSvg from 'gupo-icons-base/es/asn/ImportOutlined';

export interface ImportOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconImportOutlined: ImportOutlinedIconType = (props, context) => (
    <Icon name='ImportOutlined' {...{ ...props, ...context.attrs }} icon={ImportOutlinedSvg} />
);

IconImportOutlined.displayName = 'IconImportOutlined';
IconImportOutlined.theme = 'outlined';
IconImportOutlined.originName = 'import';

export default IconImportOutlined;
