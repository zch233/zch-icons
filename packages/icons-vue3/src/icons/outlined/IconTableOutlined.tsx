// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TableOutlinedSvg from 'icon-base/es/asn/TableOutlined';

export interface TableOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTableOutlined: TableOutlinedIconType = (props, context) => <Icon name='TableOutlined' {...{ ...props, ...context.attrs }} icon={TableOutlinedSvg} />;

IconTableOutlined.displayName = 'IconTableOutlined';

export default IconTableOutlined;
