// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownOutlinedSvg from 'icon-base/es/asn/FileUnknownOutlined';

export interface FileUnknownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileUnknownOutlined: FileUnknownOutlinedIconType = (props, context) => (
    <Icon name='FileUnknownOutlined' {...{ ...props, ...context.attrs }} icon={FileUnknownOutlinedSvg} />
);

IconFileUnknownOutlined.displayName = 'IconFileUnknownOutlined';

export default IconFileUnknownOutlined;
