// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordOutlinedSvg from 'icon-base/es/asn/FileWordOutlined';

export interface FileWordOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileWordOutlined: FileWordOutlinedIconType = (props, context) => (
    <Icon name='FileWordOutlined' {...{ ...props, ...context.attrs }} icon={FileWordOutlinedSvg} />
);

IconFileWordOutlined.displayName = 'IconFileWordOutlined';

export default IconFileWordOutlined;
