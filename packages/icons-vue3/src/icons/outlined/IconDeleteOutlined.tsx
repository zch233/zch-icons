// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteOutlinedSvg from 'icon-base/es/asn/DeleteOutlined';

export interface DeleteOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDeleteOutlined: DeleteOutlinedIconType = (props, context) => (
    <Icon name='DeleteOutlined' {...{ ...props, ...context.attrs }} icon={DeleteOutlinedSvg} />
);

IconDeleteOutlined.displayName = 'IconDeleteOutlined';

export default IconDeleteOutlined;
