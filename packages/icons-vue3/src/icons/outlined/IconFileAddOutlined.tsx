// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddOutlinedSvg from 'icon-base/es/asn/FileAddOutlined';

export interface FileAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileAddOutlined: FileAddOutlinedIconType = (props, context) => (
    <Icon name='FileAddOutlined' {...{ ...props, ...context.attrs }} icon={FileAddOutlinedSvg} />
);

IconFileAddOutlined.displayName = 'IconFileAddOutlined';

export default IconFileAddOutlined;
