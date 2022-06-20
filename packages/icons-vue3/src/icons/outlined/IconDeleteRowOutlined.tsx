// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteRowOutlinedSvg from 'icon-base/es/asn/DeleteRowOutlined';

export interface DeleteRowOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDeleteRowOutlined: DeleteRowOutlinedIconType = (props, context) => (
    <Icon name='DeleteRowOutlined' {...{ ...props, ...context.attrs }} icon={DeleteRowOutlinedSvg} />
);

IconDeleteRowOutlined.displayName = 'IconDeleteRowOutlined';

export default IconDeleteRowOutlined;
